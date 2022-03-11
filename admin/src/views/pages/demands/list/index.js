// ** User List Component
import Table from "./Table";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Custom Components
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

// ** Icons Imports
import { User, UserCheck, UserX } from "react-feather";
// spinner
import Spinner from "../../../../@core/components/spinner/Fallback-spinner";

// ** Styles
import "@styles/react/apps/app-users.scss";
import { useQuery } from "react-query";
import { getAllDemand } from "../../../../store/demands/api";
import Error from "../../error/NotAuthorized";
import { useState } from "react";

const DemandList = () => {
  const [currentRole, setCurrentRole] = useState({
    value: "",
    label: "Select Role",
  });
  const [currentStatus, setCurrentStatus] = useState({
    value: "",
    label: "Select Status",
    number: 0,
  });
  const { data, isLoading, isError } = useQuery(["admins", getAllDemand]);
  const getActive = (list) => list.filter((el) => !el.deleted).length;
  const getDesactive = (list) => list.filter((el) => el.deleted).length;

  return (
    <div className="app-user-list">
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Error />
      ) : (
        <div>
          <Row>
            <Col lg="4" sm="6">
              <StatsHorizontal
                color="primary"
                statTitle="Total Admin"
                icon={<User size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">{data.admin.length}</h3>
                }
              />
            </Col>

            <Col lg="4" sm="6">
              <StatsHorizontal
                color="success"
                statTitle="Active Admin"
                icon={<UserCheck size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">{getActive(data.admin)}</h3>
                }
              />
            </Col>
            <Col lg="4" sm="6">
              <StatsHorizontal
                color="warning"
                statTitle="Disabled Admin"
                icon={<UserX size={20} />}
                renderStats={
                  <h3 className="fw-bolder mb-75">
                    {getDesactive(data.admin)}
                  </h3>
                }
              />
            </Col>
          </Row>
          <Table
            data={data.admin}
            setCurrentRole={setCurrentRole}
            currentRole={currentRole}
            setCurrentStatus={setCurrentStatus}
            currentStatus={currentStatus}
          />
        </div>
      )}
    </div>
  );
};

export default DemandList;

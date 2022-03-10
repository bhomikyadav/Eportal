import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StudentAssignment from "../Assignment/StudentAssignment";
import StudentExam from "../Exam/StudentExam";
import StudentFee from "../Fee/StudentFee";
import StudentHome from "../Home/StudentHome"
import StudentSubject from "../Subject/StudentSubject";
import StudentTeacher from "../Teacher/StudentTeacher";
import StudentNotice from "../Notice/StudentNotice"
import Layout from "./Layout";

function Routes() {
  return (
    <>
      <Router>
        <Route render={(props)=>(
            <Layout {...props}>
                <Switch>
                    <Route exact path="/studenthome" component={StudentHome} />
                    <Route path="/studentsubject" component={StudentSubject} />
                    <Route exact path="/studentassignment" component={StudentAssignment} />
                    <Route exact path="/studentteacher" component={StudentTeacher} />
                    <Route exact path="/studentfee" component={StudentFee} />
                    <Route exact path="/studentexam" component={StudentExam} />
                    <Route exact path="/studentnotice" component={StudentNotice} />
                    <Redirect to="/student" />
                </Switch>
            </Layout>
        )}/>
      </Router>
    </>
  );
}

export default Routes;

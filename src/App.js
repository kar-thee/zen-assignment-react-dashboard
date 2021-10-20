import React from "react";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";

import "./css/sb-admin-2.css";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        {/*  Content Wrapper  */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/*  Main Content  */}
          <div id="content">
            <Navigation />
            <MainContent />
          </div>
          {/* End of Main Content  */}
          <Footer />
        </div>
        {/*  End of Content Wrapper  */}
      </div>
      {/* End of Page Wrapper  */}

      {/* Scroll to Top Button */}
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>

      {/* Logout Modal */}
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

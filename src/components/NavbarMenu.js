import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Nav, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  onPressDashbord,
  onPressDashbordChild,
  onPressThemeColor,
  onPressGeneralSetting,
  onPressNotification,
  onPressEqualizer,
  onPressSideMenuToggle,
  onPressMenuProfileDropdown,
  onPressSideMenuTab,
  tostMessageLoad,
} from "../actions";
// import Logo from "../assets/images/logo.svg";
// import LogoWhite from "../assets/images/logo-white.svg";
import UserImage from "../assets/images/user.png";
import Avatar4 from "../assets/images/xs/avatar4.jpg";
import Avatar5 from "../assets/images/xs/avatar5.jpg";
import Avatar2 from "../assets/images/xs/avatar2.jpg";
import Avatar1 from "../assets/images/xs/avatar1.jpg";
import Avatar3 from "../assets/images/xs/avatar3.jpg";

class NavbarMenu extends React.Component {
  state = {
    linkupdate: false,
  };
  componentDidMount() {
    document.body.classList.add("full-dark");
    this.props.tostMessageLoad(true);
    // var res = window.location.pathname;
    // res = res.split("/");
    // res = res.length > 4 ? res[4] : "/";
    const { activeKey } = this.props;
    this.activeMenutabwhenNavigate("/" + activeKey);
  }

  activeMenutabwhenNavigate(activeKey) {
    if (
      activeKey === "/dashboard" ||
      activeKey === "/demographic" ||
      activeKey === "/ioT"
    ) {
      this.activeMenutabContainer("dashboradContainer");
    } else if (
      activeKey === "/appinbox" ||
      activeKey === "/appchat" ||
      activeKey === "/appcalendar" ||
      activeKey === "/appcontact" ||
      activeKey === "/apptaskbar"
    ) {
      this.activeMenutabContainer("AppContainer");
    } else if (
      activeKey === "/filemanagerdashboard" ||
      activeKey === "/filedocuments" ||
      activeKey === "/filemedia"
    ) {
      this.activeMenutabContainer("FileManagerContainer");
    } else if (
      activeKey === "/blognewpost" ||
      activeKey === "/bloglist" ||
      activeKey === "/blogdetails"
    ) {
      this.activeMenutabContainer("BlogContainer");
    } else if (
      activeKey === "/uitypography" ||
      activeKey === "/uitabs" ||
      activeKey === "/uibuttons" ||
      activeKey === "/bootstrapui" ||
      activeKey === "/uiicons" ||
      activeKey === "/uinotifications" ||
      activeKey === "/uicolors" ||
      activeKey === "/uilistgroup" ||
      activeKey === "/uimediaobject" ||
      activeKey === "/uimodal" ||
      activeKey === "/uiprogressbar"
    ) {
      this.activeMenutabContainer("UIElementsContainer");
    } else if (
      activeKey === "/widgetsdata" ||
      activeKey === "/widgetsweather" ||
      activeKey === "/widgetsblog" ||
      activeKey === "/widgetsecommers"
    ) {
      this.activeMenutabContainer("WidgetsContainer");
    } else if (activeKey === "/login") {
      this.activeMenutabContainer("WidgetsContainer");
    } else if (
      activeKey === "/teamsboard" ||
      activeKey === "/profilev2page" ||
      activeKey === "/helperclass" ||
      activeKey === "/searchresult" ||
      activeKey === "/invoicesv2" ||
      activeKey === "/invoices" ||
      activeKey === "/pricing" ||
      activeKey === "/timeline" ||
      activeKey === "/profilev1page" ||
      activeKey === "/blankpage" ||
      activeKey === "/imagegalleryprofile" ||
      activeKey === "/projectslist" ||
      activeKey === "/maintanance" ||
      activeKey === "/testimonials" ||
      activeKey === "/faqs"
    ) {
      this.activeMenutabContainer("PagesContainer");
    } else if (
      activeKey === "/formvalidation" ||
      activeKey === "/basicelements"
    ) {
      this.activeMenutabContainer("FormsContainer");
    } else if (activeKey === "/tablenormal") {
      this.activeMenutabContainer("TablesContainer");
    } else if (activeKey === "/echart") {
      this.activeMenutabContainer("chartsContainer");
    } else if (activeKey === "/leafletmap") {
      this.activeMenutabContainer("MapsContainer");
    }
  }

  // componentWillReceiveProps(){
  //   this.setState({
  //     linkupdate:!this.state.linkupdate
  //   })
  // }

  activeMenutabContainer(id) {
    var parents = document.getElementById("main-menu");
    var activeMenu = document.getElementById(id);

    for (let index = 0; index < parents.children.length; index++) {
      if (parents.children[index].id !== id) {
        parents.children[index].classList.remove("active");
        parents.children[index].children[1].classList.remove("in");
      }
    }
    setTimeout(() => {
      activeMenu.classList.toggle("active");
      activeMenu.children[1].classList.toggle("in");
    }, 10);
  }
  render() {
    const {
      addClassactive,
      addClassactiveChildAuth,
      addClassactiveChildMaps,
      themeColor,
      toggleNotification,
      toggleEqualizer,
      sideMenuTab,
      isToastMessage,
      activeKey,
    } = this.props;
    // var path = window.location.pathname;
    document.body.classList.add(themeColor);

    return (
      <div>
        {isToastMessage ? (
          <Toast
            id="toast-container"
            show={isToastMessage}
            onClose={() => {
              this.props.tostMessageLoad(false);
            }}
            className="toast-info toast-top-right"
            autohide={true}
            delay={5000}
          >
            <Toast.Header className="toast-info mb-0">
              Hello, welcome to the admin Template.
            </Toast.Header>
          </Toast>
        ) : null}
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-btn">
              <button
                className="btn-toggle-offcanvas"
                onClick={() => {
                  this.props.onPressSideMenuToggle();
                }}
              >
                <i className="lnr lnr-menu fa fa-bars"></i>
              </button>
            </div>

            <div className="navbar-brand">
              <Link to="dashboard">
                AUTO
                {/* <img
                  src={
                    document.body.classList.contains("full-dark")
                      ? LogoWhite
                      : Logo
                  }
                  alt="Lucid Logo"
                  className="img-responsive logo"
                /> */}
              </Link>
            </div>

            <div className="navbar-right">
              <form id="navbar-search" className="navbar-form search-form">
                <input
                  className="form-control"
                  placeholder="Search here..."
                  type="text"
                />
                <button type="button" className="btn btn-default">
                  <i className="icon-magnifier"></i>
                </button>
              </form>

              <div id="navbar-menu">
                <ul className="nav navbar-nav">
                  <li>
                    <Link
                      to="filedocuments"
                      className="icon-menu d-none d-sm-block d-md-none d-lg-block"
                    >
                      <i className="fa fa-folder-open-o"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="appcalendar"
                      className="icon-menu d-none d-sm-block d-md-none d-lg-block"
                    >
                      <i className="icon-calendar"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="appchat" className="icon-menu d-none d-sm-block">
                      <i className="icon-bubbles"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="appinbox" className="icon-menu d-none d-sm-block">
                      <i className="icon-envelope"></i>
                      <span className="notification-dot"></span>
                    </Link>
                  </li>
                  <li
                    className={
                      toggleNotification ? "show dropdown" : "dropdown"
                    }
                  >
                    <Link
                      to="#!"
                      className="dropdown-toggle icon-menu"
                      data-toggle="dropdown"
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.onPressNotification();
                      }}
                    >
                      <i className="icon-bell"></i>
                      <span className="notification-dot"></span>
                    </Link>
                    <ul
                      className={
                        toggleNotification
                          ? "dropdown-menu notifications show"
                          : "dropdown-menu notifications"
                      }
                    >
                      <li className="header">
                        <strong>You have 4 new Notifications</strong>
                      </li>
                      <li>
                        <Link to=" ">
                          <div className="media">
                            <div className="media-left">
                              <i className="icon-info text-warning"></i>
                            </div>
                            <div className="media-body">
                              <p className="text">
                                Campaign <strong>Holiday Sale</strong> is nearly
                                reach budget limit.
                              </p>
                              <span className="timestamp">10:00 AM Today</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <div className="media">
                            <div className="media-left">
                              <i className="icon-like text-success"></i>
                            </div>
                            <div className="media-body">
                              <p className="text">
                                Your New Campaign <strong>Holiday Sale</strong>{" "}
                                is approved.
                              </p>
                              <span className="timestamp">11:30 AM Today</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <div className="media">
                            <div className="media-left">
                              <i className="icon-pie-chart text-info"></i>
                            </div>
                            <div className="media-body">
                              <p className="text">
                                Website visits from Twitter is 27% higher than
                                last week.
                              </p>
                              <span className="timestamp">04:00 PM Today</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <div className="media">
                            <div className="media-left">
                              <i className="icon-info text-danger"></i>
                            </div>
                            <div className="media-body">
                              <p className="text">
                                Error on website analytics configurations
                              </p>
                              <span className="timestamp">Yesterday</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="footer">
                        <Link to=" " className="more">
                          See all notifications
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={toggleEqualizer ? "show dropdown" : "dropdown"}
                  >
                    <Link
                      to="#!"
                      className="dropdown-toggle icon-menu"
                      data-toggle="dropdown"
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.onPressEqualizer();
                      }}
                    >
                      <i className="icon-equalizer"></i>
                    </Link>
                    <ul
                      className={
                        toggleEqualizer
                          ? "dropdown-menu user-menu menu-icon show"
                          : "dropdown-menu user-menu menu-icon"
                      }
                    >
                      <li className="menu-heading">ACCOUNT SETTINGS</li>
                      <li>
                        <Link to=" ">
                          <i className="icon-note"></i> <span>Basic</span>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <i className="icon-equalizer"></i>{" "}
                          <span>Preferences</span>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <i className="icon-lock"></i> <span>Privacy</span>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <i className="icon-bell"></i>{" "}
                          <span>Notifications</span>
                        </Link>
                      </li>
                      <li className="menu-heading">BILLING</li>
                      <li>
                        <Link to=" ">
                          <i className="icon-credit-card"></i>{" "}
                          <span>Payments</span>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <i className="icon-printer"></i> <span>Invoices</span>
                        </Link>
                      </li>
                      <li>
                        <Link to=" ">
                          <i className="icon-refresh"></i> <span>Renewals</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="login" className="icon-menu">
                      <i className="icon-login"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div id="left-sidebar" className="sidebar" style={{ zIndex: 9 }}>
          <div className="sidebar-scroll">
            <div className="user-account">
              <img
                src={UserImage}
                className="rounded-circle user-photo"
                alt="User Profile "
              />
              <Dropdown>
                <span>Welcome,</span>
                <Dropdown.Toggle
                  variant="none"
                  as="a"
                  id="dropdown-basic"
                  className="user-name"
                >
                  <strong>Alizee Thomas</strong>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right account">
                  <Dropdown.Item to="profilev2page">
                    <i className="icon-user"></i>My Profile
                  </Dropdown.Item>
                  <Dropdown.Item to="appinbox">
                    {" "}
                    <i className="icon-envelope-open"></i>Messages
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <i className="icon-settings"></i>Settings
                  </Dropdown.Item>
                  <li className="divider"></li>
                  <Dropdown.Item to="login">
                    {" "}
                    <i className="icon-power"></i>Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr />
              <ul className="row list-unstyled">
                <li className="col-4">
                  <small>Sales</small>
                  <h6>456</h6>
                </li>
                <li className="col-4">
                  <small>Order</small>
                  <h6>1350</h6>
                </li>
                <li className="col-4">
                  <small>Revenue</small>
                  <h6>$2.13B</h6>
                </li>
              </ul>
            </div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
              <Link
                  className={sideMenuTab[0] ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  onClick={() => {
                    this.props.onPressSideMenuTab(0);
                  }}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sideMenuTab[1] ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  onClick={() => {
                    this.props.onPressSideMenuTab(1);
                  }}
                >
                  <i className="icon-book-open"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sideMenuTab[2] ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  onClick={() => {
                    this.props.onPressSideMenuTab(2);
                  }}
                >
                  <i className="icon-settings"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sideMenuTab[3] ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  onClick={() => {
                    this.props.onPressSideMenuTab(3);
                  }}
                >
                  <i className="icon-question"></i>
                </Link>
              </li>
            </ul>
            <div className="tab-content p-l-0 p-r-0">
              <div
                className={sideMenuTab[0] ? "tab-pane active show" : "tab-pane"}
                id="menu"
              >
                <Nav id="left-sidebar-nav" className="sidebar-nav">
                  <ul id="main-menu" className="metismenu">
                    <li className="" id="dashboradContainer">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("dashboradContainer");
                        }}
                      >
                        <i className="icon-home"></i> <span>Dashboard</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={activeKey === "dashboard" ? "active" : ""}
                        >
                          <Link to="dashboard">Analytical</Link>
                        </li>
                        <li
                          className={
                            activeKey === "demographic" ? "active" : ""
                          }
                        >
                          <Link to="demographic">Demographic</Link>
                        </li>
                        <li className={activeKey === "ioT" ? "active" : ""}>
                          <Link to="ioT">IoT</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="AppContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("AppContainer");
                        }}
                      >
                        <i className="icon-grid"></i> <span>App</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={activeKey === "appinbox" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="appinbox">Inbox</Link>
                        </li>
                        <li
                          className={activeKey === "appchat" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="appchat">Chat</Link>
                        </li>
                        <li
                          className={
                            activeKey === "appcalendar" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="appcalendar">Calendar</Link>
                        </li>
                        <li
                          className={activeKey === "appcontact" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="appcontact">Contact Card</Link>
                        </li>
                        <li
                          className={activeKey === "apptaskbar" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="apptaskbar">Taskboard</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="FileManagerContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("FileManagerContainer");
                        }}
                      >
                        <i className="icon-folder"></i>{" "}
                        <span>File Manager</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={
                            activeKey === "filemanagerdashboard" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="filemanagerdashboard">Dashboard</Link>
                        </li>
                        <li
                          className={
                            activeKey === "filedocuments" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="filedocuments">Documents</Link>
                        </li>
                        <li
                          className={activeKey === "filemedia" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="filemedia">Media</Link>
                        </li>
                        <li
                          className={activeKey === "fileimages" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="fileimages">Images</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="BlogContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("BlogContainer");
                        }}
                      >
                        <i className="icon-globe"></i> <span>Blog</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={
                            activeKey === "blognewpost" ? "active" : ""
                          }
                        >
                          <Link to="blognewpost">New Post</Link>
                        </li>
                        <li
                          className={activeKey === "bloglist" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="bloglist">Blog List</Link>
                        </li>
                        <li
                          className={
                            activeKey === "blogdetails" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="blogdetails">Blog Detail</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="UIElementsContainer" className="">
                      <Link
                        to="#uiElements"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("UIElementsContainer");
                        }}
                      >
                        <i className="icon-diamond"></i>{" "}
                        <span>UI Elements</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={
                            activeKey === "uitypography" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="uitypography">Typography</Link>
                        </li>
                        <li
                          className={activeKey === "uitabs" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="uitabs">Tabs</Link>
                        </li>
                        <li
                          className={activeKey === "uibuttons" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="uibuttons">Buttons</Link>
                        </li>
                        <li
                          className={
                            activeKey === "bootstrapui" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="bootstrapui">Bootstrap UI</Link>
                        </li>
                        <li
                          className={activeKey === "uiicons" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="uiicons">Icons</Link>
                        </li>
                        <li
                          className={
                            activeKey === "uinotifications" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="uinotifications">Notifications</Link>
                        </li>
                        <li
                          className={activeKey === "uicolors" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="uicolors">Colors</Link>
                        </li>

                        <li
                          className={
                            activeKey === "uilistgroup" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="uilistgroup">List Group</Link>
                        </li>
                        <li
                          className={
                            activeKey === "uimediaobject" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="uimediaobject">Media Object</Link>
                        </li>
                        <li
                          className={activeKey === "uimodal" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="uimodal">Modals</Link>
                        </li>
                        <li
                          className={
                            activeKey === "uiprogressbar" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="uiprogressbar">Progress Bars</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="WidgetsContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("WidgetsContainer");
                        }}
                      >
                        <i className="icon-puzzle"></i> <span>Widgets</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={
                            activeKey === "widgetsdata" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="widgetsdata">Data</Link>
                        </li>

                        <li
                          className={
                            activeKey === "widgetsweather" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="widgetsweather">Weather</Link>
                        </li>

                        <li
                          className={
                            activeKey === "widgetsblog" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="widgetsblog">Blog</Link>
                        </li>
                        <li
                          className={
                            activeKey === "widgetsecommers" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="widgetsecommers">eCommerce</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="AuthenticationContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer(
                            "AuthenticationContainer"
                          );
                        }}
                      >
                        <i className="icon-lock"></i>{" "}
                        <span>Authentication</span>
                      </Link>
                      <ul
                        className={
                          addClassactive[6] ? "collapse in" : "collapse"
                        }
                      >
                        <li
                          className={addClassactiveChildAuth[0] ? "active" : ""}
                        >
                          <Link to="login">Login</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[1] ? "active" : ""}
                        >
                          <Link to="registration">Register</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[2] ? "active" : ""}
                        >
                          <Link to="lockscreen">Lockscreen</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[3] ? "active" : ""}
                        >
                          <Link to="forgotpassword">Forgot Password</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[4] ? "active" : ""}
                        >
                          <Link to="page404">Page 404</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[5] ? "active" : ""}
                        >
                          <Link to="page403">Page 403</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[6] ? "active" : ""}
                        >
                          <Link to="page500">Page 500</Link>
                        </li>
                        <li
                          className={addClassactiveChildAuth[7] ? "active" : ""}
                        >
                          <Link to="page503">Page 503</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="PagesContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("PagesContainer");
                        }}
                      >
                        <i className="icon-docs"></i> <span>Pages</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={activeKey === "blankpage" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="blankpage">Blank Page</Link>{" "}
                        </li>
                        <li
                          className={
                            activeKey === "profilev1page" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="profilev1page">
                            Profile{" "}
                            <span className="badge badge-default float-right">
                              v1
                            </span>
                          </Link>
                        </li>
                        <li
                          className={
                            activeKey === "profilev2page" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="profilev2page">
                            Profile{" "}
                            <span className="badge badge-warning float-right">
                              v2
                            </span>
                          </Link>
                        </li>
                        <li
                          className={
                            activeKey === "imagegalleryprofile" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="imagegalleryprofile">Image Gallery </Link>{" "}
                        </li>

                        <li
                          className={activeKey === "timeline" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="timeline">Timeline</Link>
                        </li>

                        <li
                          className={activeKey === "pricing" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="pricing">Pricing</Link>
                        </li>
                        <li
                          className={activeKey === "invoices" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="invoices">
                            Invoices
                            <span className="badge badge-default float-right">
                              v1
                            </span>
                          </Link>
                        </li>
                        <li
                          className={activeKey === "invoicesv2" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="invoicesv2">
                            Invoices{" "}
                            <span className="badge badge-warning float-right">
                              v2
                            </span>
                          </Link>
                        </li>
                        <li
                          className={
                            activeKey === "searchresult" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="searchresult">Search Results</Link>
                        </li>
                        <li
                          className={
                            activeKey === "helperclass" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="helperclass">Helper Classes</Link>
                        </li>
                        <li
                          className={activeKey === "teamsboard" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="teamsboard">Teams Board</Link>
                        </li>
                        <li
                          className={
                            activeKey === "projectslist" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="projectslist">Projects List</Link>
                        </li>
                        <li
                          className={
                            activeKey === "maintanance" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="maintanance">Maintenance</Link>
                        </li>
                        <li
                          className={
                            activeKey === "testimonials" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="testimonials">Testimonials</Link>
                        </li>
                        <li
                          className={activeKey === "faqs" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="faqs">FAQ</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="FormsContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("FormsContainer");
                        }}
                      >
                        <i className="icon-pencil"></i> <span>Forms</span>
                      </Link>
                      <ul className={"collapse"}>
                        <li
                          className={
                            activeKey === "formvalidation" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="formvalidation">Form Validation</Link>
                        </li>
                        <li
                          className={
                            activeKey === "basicelements" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="basicelements">Basic Elements</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="TablesContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("TablesContainer");
                        }}
                      >
                        <i className="icon-tag"></i> <span>Tables</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={
                            activeKey === "tablenormal" ? "active" : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="tablenormal">Normal Tables</Link>{" "}
                        </li>
                      </ul>
                    </li>
                    <li id="chartsContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("chartsContainer");
                        }}
                      >
                        <i className="icon-bar-chart"></i> <span>Charts</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={activeKey === "echart" ? "active" : ""}
                          onClick={() => {}}
                        >
                          <Link to="echart">E-chart</Link>{" "}
                        </li>
                      </ul>
                    </li>
                    <li id="MapsContainer" className="">
                      <Link
                        to="#!"
                        className="has-arrow"
                        onClick={(e) => {
                          e.preventDefault();
                          this.activeMenutabContainer("MapsContainer");
                        }}
                      >
                        <i className="icon-map"></i> <span>Maps</span>
                      </Link>
                      <ul className="collapse">
                        <li
                          className={
                            activeKey === "leafletmap" ||
                            addClassactiveChildMaps[0]
                              ? "active"
                              : ""
                          }
                          onClick={() => {}}
                        >
                          <Link to="leafletmap">Leaflet Map</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Nav>
              </div>
              <div
                className={
                  sideMenuTab[1]
                    ? "tab-pane p-l-15 p-r-15 show active"
                    : "tab-pane p-l-15 p-r-15"
                }
                id="Chat"
              >
                <form>
                  <div className="input-group m-b-20">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-magnifier"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
                <ul className="right_chat list-unstyled">
                  <li className="online">
                    <Link to=" ">
                      <div className="media">
                        <img className="media-object " src={Avatar4} alt="" />
                        <div className="media-body">
                          <span className="name">Chris Fox</span>
                          <span className="message">Designer, Blogger</span>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="online">
                    <Link to=" ">
                      <div className="media">
                        <img className="media-object " src={Avatar5} alt="" />
                        <div className="media-body">
                          <span className="name">Joge Lucky</span>
                          <span className="message">Java Developer</span>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="offline">
                    <Link to=" ">
                      <div className="media">
                        <img className="media-object " src={Avatar2} alt="" />
                        <div className="media-body">
                          <span className="name">Isabella</span>
                          <span className="message">CEO, Thememakker</span>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="offline">
                    <Link to=" ">
                      <div className="media">
                        <img className="media-object " src={Avatar1} alt="" />
                        <div className="media-body">
                          <span className="name">Folisise Chosielie</span>
                          <span className="message">
                            Art director, Movie Cut
                          </span>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="online">
                    <Link to=" ">
                      <div className="media">
                        <img className="media-object " src={Avatar3} alt="" />
                        <div className="media-body">
                          <span className="name">Alexander</span>
                          <span className="message">Writter, Mag Editor</span>
                          <span className="badge badge-outline status"></span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Seeting Silder */}
              <div
                className={
                  sideMenuTab[2]
                    ? "tab-pane p-l-15 p-r-15 show active"
                    : "tab-pane p-l-15 p-r-15"
                }
                id="setting"
              >
                <h6>Choose Mode</h6>
                <ul className="choose-skin list-unstyled">
                  <li
                    data-theme="white"
                    className={
                      document.body.classList.contains("full-dark")
                        ? ""
                        : "active"
                    }
                    onClick={() => {
                      this.setState({ somethi: false });
                      document.body.classList.remove("full-dark");
                    }}
                  >
                    <div className="white"></div>
                    <span>Light</span>
                  </li>
                  <li
                    data-theme="black"
                    className={
                      document.body.classList.contains("full-dark")
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      this.setState({ somethi: true });
                      document.body.classList.add("full-dark");
                    }}
                  >
                    <div className="black"></div>
                    <span>Dark</span>
                  </li>
                </ul>

                <hr />
                <h6>Choose Skin</h6>
                <ul className="choose-skin list-unstyled">
                  <li
                    data-theme="purple"
                    className={themeColor === "theme-purple" ? "active" : ""}
                  >
                    <div
                      className="purple"
                      onClick={() => {
                        if (themeColor !== "theme-purple") {
                          document.body.classList.remove(themeColor);
                        }
                        this.props.onPressThemeColor("purple");
                      }}
                    ></div>
                    <span>Purple</span>
                  </li>
                  <li
                    data-theme="blue"
                    className={themeColor === "theme-blue" ? "active" : ""}
                  >
                    <div
                      className="blue"
                      onClick={() => {
                        if (themeColor !== "theme-blue") {
                          document.body.classList.remove(themeColor);
                        }
                        this.props.onPressThemeColor("blue");
                      }}
                    ></div>
                    <span>Blue</span>
                  </li>
                  <li
                    data-theme="cyan"
                    // className="active"
                    className={themeColor === "theme-cyan" ? "active" : ""}
                  >
                    <div
                      className="cyan"
                      onClick={() => {
                        if (themeColor !== "theme-cyan") {
                          document.body.classList.remove(themeColor);
                        }
                        this.props.onPressThemeColor("cyan");
                      }}
                    ></div>
                    <span>Cyan</span>
                  </li>
                  <li
                    data-theme="green"
                    className={themeColor === "theme-green" ? "active" : ""}
                  >
                    <div
                      className="green"
                      onClick={() => {
                        if (themeColor !== "theme-green") {
                          document.body.classList.remove(themeColor);
                        }
                        this.props.onPressThemeColor("green");
                      }}
                    ></div>
                    <span>Green</span>
                  </li>
                  <li
                    data-theme="orange"
                    className={themeColor === "theme-orange" ? "active" : ""}
                  >
                    <div
                      className="orange"
                      onClick={() => {
                        if (themeColor !== "theme-orange") {
                          document.body.classList.remove(themeColor);
                        }
                        this.props.onPressThemeColor("orange");
                      }}
                    ></div>
                    <span>Orange</span>
                  </li>
                  <li
                    data-theme="blush"
                    className={themeColor === "theme-blush" ? "active" : ""}
                  >
                    <div
                      className="blush"
                      onClick={() => {
                        if (themeColor !== "theme-blush") {
                          document.body.classList.remove(themeColor);
                        }
                        this.props.onPressThemeColor("blush");
                      }}
                    ></div>
                    <span>Blush</span>
                  </li>
                </ul>
                <hr />
              </div>
              <div
                className={
                  sideMenuTab[3]
                    ? "tab-pane p-l-15 p-r-15 show active"
                    : "tab-pane p-l-15 p-r-15"
                }
                id="question"
              >
                <form>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-magnifier"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
                <ul className="list-unstyled question">
                  <li className="menu-heading">HOW-TO</li>
                  <li>
                    <Link
                      to="#!"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      How to Create Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#!"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Boost Your Sales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#!"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Website Analytics
                    </Link>
                  </li>
                  <li className="menu-heading">ACCOUNT</li>
                  <li>
                    <Link
                      to="registration"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Cearet New Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="forgotpassword"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Change Password?
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#!"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Privacy &amp; Policy
                    </Link>
                  </li>
                  <li className="menu-heading">BILLING</li>
                  <li>
                    <Link
                      to="#!"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Payment info
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#!"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Auto-Renewal
                    </Link>
                  </li>
                  <li className="menu-button m-t-30">
                    <Link
                      to="#!"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="icon-question"></i> Need Help?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavbarMenu.propTypes = {
  addClassactive: PropTypes.array.isRequired,
  addClassactiveChild: PropTypes.array.isRequired,
  addClassactiveChildApp: PropTypes.array.isRequired,
  addClassactiveChildFM: PropTypes.array.isRequired,
  addClassactiveChildBlog: PropTypes.array.isRequired,
  addClassactiveChildUI: PropTypes.array.isRequired,
  addClassactiveChildWidgets: PropTypes.array.isRequired,
  addClassactiveChildAuth: PropTypes.array.isRequired,
  addClassactiveChildPages: PropTypes.array.isRequired,
  addClassactiveChildForms: PropTypes.array.isRequired,
  addClassactiveChildTables: PropTypes.array.isRequired,
  addClassactiveChildChart: PropTypes.array.isRequired,
  addClassactiveChildMaps: PropTypes.array.isRequired,
  themeColor: PropTypes.string.isRequired,
  generalSetting: PropTypes.array.isRequired,
  toggleNotification: PropTypes.bool.isRequired,
  toggleEqualizer: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ navigationReducer }) => {
  const {
    addClassactive,
    addClassactiveChild,
    addClassactiveChildApp,
    addClassactiveChildFM,
    addClassactiveChildBlog,
    addClassactiveChildUI,
    addClassactiveChildWidgets,
    addClassactiveChildAuth,
    addClassactiveChildPages,
    addClassactiveChildForms,
    addClassactiveChildTables,
    addClassactiveChildChart,
    addClassactiveChildMaps,
    themeColor,
    generalSetting,
    toggleNotification,
    toggleEqualizer,
    menuProfileDropdown,
    sideMenuTab,
    isToastMessage,
  } = navigationReducer;
  return {
    addClassactive,
    addClassactiveChild,
    addClassactiveChildApp,
    addClassactiveChildFM,
    addClassactiveChildBlog,
    addClassactiveChildUI,
    addClassactiveChildWidgets,
    addClassactiveChildAuth,
    addClassactiveChildPages,
    addClassactiveChildForms,
    addClassactiveChildTables,
    addClassactiveChildChart,
    addClassactiveChildMaps,
    themeColor,
    generalSetting,
    toggleNotification,
    toggleEqualizer,
    menuProfileDropdown,
    sideMenuTab,
    isToastMessage,
  };
};

export default connect(mapStateToProps, {
  onPressDashbord,
  onPressDashbordChild,
  onPressThemeColor,
  onPressGeneralSetting,
  onPressNotification,
  onPressEqualizer,
  onPressSideMenuToggle,
  onPressMenuProfileDropdown,
  onPressSideMenuTab,
  tostMessageLoad,
})(NavbarMenu);

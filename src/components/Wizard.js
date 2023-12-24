import React, { Component } from "react";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      uid: "00000000-0000-0000-0000-000000000000",
      project_Id: null,
      unique_Id: null,
      data_by: null,
      data_date: null,
      project_name: null,
      admin_approv: null,
      admin_approv_date: null,
      prop_num: null,
      prop_title: null,
      prop_type: null,
      dm_paper: null,
      dm_paper_file: null,
      day: null,
      month: null,
      year: null,
      affected_area_ha: null,
      affected_area_acr: null,
      user_agency: null,
      category: null,
      sub_category: null,
      oth_sub_category: null,
      division: null,
      circle: null,
      district: null,
      mla_constituency: null,
      cm_announce: null,
      vip_details: null,
      end_p1:null,
      prop_Area:null,
      prop_reserved:null,
      prop_VP:null,
      prop_NAP:null,
      prop_protected:null,
      prop_civil:null,
      prop_others:null,
      prop_tree_cut:null,
      act_tree_cut:null,
      prop_trns_map:null,
      prop_trns_kml:null,
      DM_FRA:null,
      DM_FRA_File:null,
      end_p2:null,
      ca_area:null,
      ca_division:null,
      ident_divisions:null,
      ca_reserved:null,
      ca_VP:null,
      ca_NAP:null,
      ca_protect:null,
      ca_Civil:null,
      ca_others:null,
      ca_PlantCount:null,
      ca_map:null,
      ca_kml:null,
      in_prin_app_S1:null,
      in_prin_app_S1_let:null,
      in_prin_app_S1_date:null,
      in_prin_app_S1_file:null,
      end_P3:null,received_CA:null,
      challan_CA:null,
      received_WMP:null,
      challan_WMP:null,
      received_muck:null,
      challan_muck:null,
      received_NPV:null,
      challan_NPV:null,
      received_others:null,
      challan_others:null,
      received_road_side:null,
      challan_road_side:null,
      received_Penal_NPV:null,
      challan_Penal_NPV:null,
      received_Penal_CA:null,
      challan_Penal_CA:null,
      received_Sum:null,
      end_p4:null,
      expense_CA:null,
      sanction_CA:null,
      expense_WMP:null,
      sanction_WMP:null,
      expense_muck:null,
      sanction_muck:null,
      expense_NPV:null,
      sanction_NPV:null,
      expense_others:null,sanction_others:null,expense_road_side:null,sanction_road_side:null,
      expense_Penal_NPV:null,sanction_Penal_NPV:null,expense_Penal_CA:null,sanction_Penal_CA:null,
      expense_Sum:null,end_p5:null,cs_area:null,cs_GP:null,cs_Patwari:null,cs_Tehsil:null,
      cs_District:null,rf_area:null,rf_Compt:null,rf_Beat:null,rf_Range:null,rf_Division:null,
      vp_Area:null,vp_Name:null,vp_Range:null,vp_Division:null,Accredited_Area:null,Accredited_Name:null,
      Accredited_Address:null,Accredited_Discr:null,Accredited_Loc:null,Accredited_Veg:null,
      Accredited_VegYear:null,end_p6:null,d_cs_Area:null,d_cs_GP:null,d_cs_Patwari:null,
      d_cs_Tehsil:null,d_cs_District:null,d_rf_Area:null,d_rf_Compt:null,d_rf_Beat:null,
      d_rf_Range:null,d_rf_Division:null,d_vp_Area:null,d_vp_vp:null,d_vp_range:null,
      d_vp_division:null,d_vp_04:null,end_p7:null,status_S2_Comp:null,DM_Mutation:null,DM_Mutation_date:null,
      DM_Mutation_file:null,stage2_approve:null,stage2_approve_date:null,stage2_approve_file:null,
      Status_UK_Sec_GO:null,UK_Sec_GO:null,UK_Sec_GO_date:null,UK_Sec_GO_file:null,RF_Declare:null,
      RF_Declare_date:null,RF_Declare_File:null,Reject_Declare:null,Reject_Declare_date:null,
      Reject_Declare_file:null,end_comment:null,UK_Sashsan:null,end_p8:null,f9_violation:null,
      f9_violation_letter:null,f9_violation_date:null,f9_violation_file:null,end_p9:null,
      f10_lease_name:null,f10_order_no:null,f10_order_date:null,f10_order_file:null,
      f10_lease_expiry:null,f10_expiry_date:null,f10_expiry_file:null,f10_lease_renew:null,
      f10_renew_date:null,f10_renew_file:null,f10_status_approval:null,f10_approval_letter:null,
      f10_approval_date:null,f10_approval_file:null,f10_amount:null,f10_challan:null,end_p10:null,
      created_at:null,updated_at:null

    };
  }

  onchangeHandler = (e) => {
    console.log(e);
    if (e.target.type == "file") {
      //alert(1)
      this.setState((preState) => {
        return {
          ...preState,
          [name]: e.target.files[0],
        };
      });
    }
    let name = e.target.name;
    let value = e.target.value;
    this.setState((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
    console.log(e.target.value);
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="container">
          {/* Content Header (Page header) */}
          {/* /.content-header */}
          {/* Main content */}
          <div className="content">
            <div className="card bg-success">
              <div className="card-body">
                <div className="container-fluid  p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Details of Forest Land Transfer Proposal
                  </h4>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Project Name*
                            <span className="glyphicon glyphicon-envelope"></span>
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="project_name"
                              onChange={(e) => this.onchangeHandler(e)}
                              placeholder="Enter Project Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="admin_approv_date"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-6 col-form-label col-form-label-sm"
                          >
                            Administrative &amp; Financial Approval for the
                            prepration of the Proposal
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="admin_approv"
                              onChange={(e) => this.onchangeHandler(e)}
                              placeholder="Enter Letter No."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Proposal Number*
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="prop_num"
                              onChange={(e) => this.onchangeHandler(e)}
                              placeholder="Enter Proposal No."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-4 col-form-label col-form-label-sm"
                          >
                            Title of the Proposal
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              name="prop_title"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Proposal Type
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-sm"
                              name="prop_type"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-10 col-form-label col-form-label-sm"
                          >
                            Certificate of Justification Issued by District
                            Magistrate for Non Site Specific Proposal{" "}
                          </label>
                          <div className="col-sm-2">
                            pdf(
                            <a href="C:\fakepath\Screenshot 2023-12-15 170944.pdf">
                              do
                            </a>
                            )
                            <input
                              type="file"
                              className="form-control form-control-sm"
                              name="dm_paper_file"
                              onChange={(e) => this.onchangeHandler(e)}
                              placeholder="Enter Proposal No."
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <label
                          htmlFor="colFormLabelSm"
                          className="col-sm-9 col-form-label col-form-label-sm"
                        >
                          Date of Submission of the Proposal for the first time
                          in the office of the Divisional Forest Office-
                        </label>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-2 col-form-label col-form-label-sm"
                              >
                                Date
                              </label>
                              <div className="col-sm-10">
                                <select
                                  className="form-control form-control-sm"
                                  name="day"
                                  onChange={(e) => this.onchangeHandler(e)}
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-2 col-form-label col-form-label-sm"
                              >
                                Month
                              </label>
                              <div className="col-sm-10">
                                <select
                                  className="form-control form-control-sm"
                                  name="month"
                                  onChange={(e) => this.onchangeHandler(e)}
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-2 col-form-label col-form-label-sm"
                              >
                                Year
                              </label>
                              <div className="col-sm-10">
                                <select
                                  className="form-control form-control-sm"
                                  name="year"
                                  onChange={(e) => this.onchangeHandler(e)}
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Area of the forest land proposed to be transfered in
                            the concerned forest Division/District
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <input
                                type="text"
                                className="form-control form-control-sm col-md-4 "
                                name="affected_area_ha"
                                onChange={(e) => this.onchangeHandler(e)}
                                placeholder="HA"
                              />
                              <input
                                type="text"
                                className="form-control form-control-sm col-md-4"
                                name="affected_area_acr"
                                onChange={(e) => this.onchangeHandler(e)}
                                placeholder="ACRE"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Name of the User Agency/Department
                            </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="user_agency"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Category of Proposal
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              name="category"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Sub Category
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              name="sub_category"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Other Sub Category
                          </label>
                          <div className="col-sm-7">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="oth_sub_category"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Forest Division
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              name="division"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Circle
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              name="circle"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            District
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              name="district"
                              onChange={(e) => this.onchangeHandler(e)}
                            >
                              <option selected>Select</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            MLA Constituency
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="mla_constituency"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-6 col-form-label col-form-label-sm"
                          >
                            Chief Minister Announcement Number
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="cm_announce"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-6 col-form-label col-form-label-sm"
                          >
                            Details of VIP Reference
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="vip_details"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 2 */}
            <div className="card bg-danger">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Details of Forest Land Proposed to be Transferred{" "}
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Total Area of forest land proposed to be transferred
                            in the concerned Forest Division/District
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="prop_Area"
                              onChange={(e) => this.onchangeHandler(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>
                      <b>
                        Category Wise Forest Land Proposed to be Transferred
                      </b>
                    </h5>
                    <div className="row mt-1">
                      <div className="col-12">
                        <label
                          htmlFor="colFormLabelSm"
                          className="col-sm-9 col-form-label"
                        >
                          Legal Status of the Forest Land Proposed to be
                          transferred in the respective Forest
                          Division/District-
                        </label>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Reserved*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name=" prop_reserved"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Protected*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="prop_protected"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Panchayati Van*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="prop_VP"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Civil*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="prop_civil"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Naap Bhoomi*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="prop_NAP"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Other*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="prop_others"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-7 col-form-label col-form-label-sm"
                              >
                                Total No. of affected trees under the proposal
                              </label>
                              <div className="col-sm-5">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="prop_tree_cut"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with two decimal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-8 col-form-label col-form-label-sm"
                              >
                                Species wise no. of trees affected under the
                                proposal
                              </label>
                              <div className="col-sm-4">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-7 col-form-label col-form-label-sm"
                              >
                                Total No. of trees actually felled
                              </label>
                              <div className="col-sm-5">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  name="act_tree_cut"
                                  onChange={(e) => this.onchangeHandler(e)}
                                  placeholder="Numeric with two decimal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-8 col-form-label col-form-label-sm"
                              >
                                Species wise no. of trees affected actually
                                felled
                              </label>
                              <div className="col-sm-4">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-7 col-form-label col-form-label-sm"
                              >
                                Map of forest land proposed to be transfeered
                              </label>
                              <div className="col-sm-5">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-8 col-form-label col-form-label-sm"
                              >
                                FRA Certificate issued by the District
                                Magistrate
                              </label>
                              <div className="col-sm-4">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 3 */}
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Details of Compensatory Area{" "}
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Total Compensatory Afforestation Area against the
                            proposed diverson of forest land
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="Numeric with four decimal"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Diverson in which Compensatory Afforestation is
                            proposed to be carried out
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            If the Compensatory Afforestation is proposed to be
                            done in the same division in which the forest land
                            has been transferred the area of the land proposed
                            for Compensatory Afforestation*
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="Numeric with two decimal"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <label
                          htmlFor="colFormLabelSm"
                          className="col-sm-9 col-form-label"
                        >
                          Legal status wise area of land selected for
                          Compensatory Afforestation*-
                        </label>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Reserved*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Protected*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-9 col-form-label col-form-label-sm"
                              >
                                Conditions under which in Principle approval has
                                been given
                              </label>
                              <div className="col-sm-3">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Panchayati Van*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Civil*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Naap Bhoomi*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-3 col-form-label col-form-label-sm"
                              >
                                Other*
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-8 col-form-label col-form-label-sm"
                              >
                                No. of plants to be planted as per the
                                Compensatory Afforestation proposal
                              </label>
                              <div className="col-sm-4">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder="Numeric Value"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-8 col-form-label col-form-label-sm"
                              >
                                Species wise No. of plants to be planted as per
                                the Compensatory Afforestation proposal
                              </label>
                              <div className="col-sm-4">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-7 col-form-label col-form-label-sm"
                              >
                                Map of the Compensatory Afforestation Area
                              </label>
                              <div className="col-sm-5">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-7 col-form-label col-form-label-sm"
                              >
                                status of issue of In-Principle approval
                              </label>
                              <div className="col-sm-5">
                                <select
                                  className="form-control form-control-sm"
                                  id="autoSizingSelect"
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-7 col-form-label col-form-label-sm"
                              >
                                Letter No. &amp; Date of In-Principle
                                approval(Stage-I)
                              </label>
                              <div className="col-sm-5">
                                <input
                                  type="text"
                                  className="form-control form-control-sm "
                                  id="colFormLabelSm"
                                  placeholder="Numeric with four decimal"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-2 col-form-label col-form-label-sm"
                              >
                                Date
                              </label>
                              <div className="col-sm-5">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                />
                              </div>
                              <div className="col-sm-5">
                                <span className="text-white">
                                  <i className="fa-solid fa-file-circle-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 4 */}
            <div className="card bg-warning">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Details of Amount Deposited under various heads against
                    Transfer of Forest Land{" "}
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Compensatory Afforestation ₹
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            NPV ₹
                          </label>
                          <div className="col-sm-7">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Penal NPV ₹
                          </label>
                          <div className="col-sm-9">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Wildlife Mitigation Plan ₹
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Other ₹
                          </label>
                          <div className="col-sm-7">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Penal CA ₹
                          </label>
                          <div className="col-sm-9">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Muck Disposal ₹
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Roadside Plantation ₹
                          </label>
                          <div className="col-sm-7">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Challan"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Total ₹
                          </label>
                          <div className="col-sm-9  ">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="Numeric with four decimal"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 5 */}
            <div className="card bg-success">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Item wise details of utilization / expenditure of fund
                    deposited in CAMPA Fund{" "}
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Compensatory Afforestation ₹
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            NPV ₹
                          </label>
                          <div className="col-sm-7">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Penal NPV ₹
                          </label>
                          <div className="col-sm-9">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Wildlife Mitigation Plan ₹
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Other ₹
                          </label>
                          <div className="col-sm-7">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Penal CA ₹
                          </label>
                          <div className="col-sm-9">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Muck Disposal ₹
                          </label>
                          <div className="col-sm-5">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Roadside Plantation ₹
                          </label>
                          <div className="col-sm-7">
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder="Sanction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Total ₹
                          </label>
                          <div className="col-sm-9  ">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="Numeric with four decimal"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 6 */}
            <div className="card bg-danger">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Legal status-wise details of area selected for Compensatory
                    Afforestation in the Forest Division
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-md-3 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Civil Soyam Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Gram Panchayat
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Patwari Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Tehsil
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                District
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Degraded Reserve Forest Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Compartment No.
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Beat
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Range
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Forest Division
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Panchayati Forest Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Panchayati Van
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Name of the Range
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Forest Division
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Accridated CA Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-9 col-form-label col-form-label-sm text-dark"
                              >
                                Name of the proposer orgnization for Accridated
                                CA
                              </label>
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-9 col-form-label col-form-label-sm text-dark"
                              >
                                Name, Adderess etc. details of the proposer
                                orgnization for Accridated CA
                              </label>
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-9 col-form-label col-form-label-sm text-dark"
                              >
                                Geographical location details of the proposed
                                Accridated CA Land
                              </label>
                              <div className="col-sm-3">
                                <select
                                  className="form-control form-control-sm"
                                  id="autoSizingSelect"
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-9 col-form-label col-form-label-sm text-dark"
                              >
                                Description of existing vegetation in the
                                proposed Accridated CA Land
                              </label>
                              <div className="col-sm-3">
                                <select
                                  className="form-control form-control-sm"
                                  id="autoSizingSelect"
                                >
                                  <option selected>Select</option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 7 */}
            <div className="card bg-danger">
              <div className="card-body">
                <div className="container-fluid bg-success p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Legal status-wise details of area where Compensatory
                    Afforestation was actually done in the Forest Division
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-md-4 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Civil Soyam Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Gram Panchayat
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Patwari Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Tehsil
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                District
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Degraded Reserve Forest Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Compartment No.
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Beat
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Range
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Forest Division
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="card" style={{ width: "18rem" }}>
                          <h5
                            className="card-title text-dark text-center pt-1"
                            style={{ fontWeight: "bold" }}
                          >
                            Panchayati Forest Land
                          </h5>
                          <div className="card-body">
                            <div className="row">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Area
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Panchayati Van
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Name of the Range
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                            <div className="row mt-1">
                              <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-6 col-form-label col-form-label-sm text-dark"
                              >
                                Forest Division
                              </label>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  id="colFormLabelSm"
                                  placeholder={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 8 */}
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Details of the final order for the transfer of the proposed
                    forest land in the Forest Division
                  </h4>
                  <form>
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-5 col-form-label col-form-label-sm"
                          >
                            Status of Final Approval
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              id="autoSizingSelect"
                            >
                              <option selected>Select</option>
                              <option value={1}>Yes</option>
                              <option value={2}>No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-7">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            Letter No. &amp; Date of Mutation of CA Land done by
                            the District Magistrate
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-7">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            Letter No. &amp; Date of Final Approval(Stage II)
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            Status of the issuance of Goverment Order
                          </label>
                          <div className="col-sm-3">
                            <select
                              className="form-control form-control-sm"
                              id="autoSizingSelect"
                            >
                              <option selected>Select</option>
                              <option value={1}>Yes</option>
                              <option value={2}>No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            Letter No. &amp; Date of the formal Goverment Order
                            for the transfer of Forest land issued by the
                            Goverment of Uttarakhand{" "}
                          </label>
                          <div className="col-sm-3">
                            <select
                              className="form-control form-control-sm"
                              id="autoSizingSelect"
                            >
                              <option selected>Select</option>
                              <option value={1}>Yes</option>
                              <option value={2}>No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-7">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            Letter No. &amp; Date of the formal order by which
                            the CA Land has been declared as Reserved /
                            Protected Forest
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-7">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-9 col-form-label col-form-label-sm"
                          >
                            Details of rejection of the proposal for transfer of
                            Forest Land for non-forest purpose
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Comments
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 9 */}
            <div className="card bg-danger">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Violation Details{" "}
                  </h4>
                  <form>
                    <div className="row mt-2">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Has there been any Violation
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-sm"
                              id="autoSizingSelect"
                            >
                              <option selected>No</option>
                              <option value={1}>Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Letter by Govt. of India regarding violation
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Details of Violation
                          </label>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Form 10 */}
            <div className="card bg-success">
              <div className="card-body">
                <div className="container-fluid p-3">
                  <h4
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Lease Details{" "}
                  </h4>
                  <form>
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Name of Lease Holder
                          </label>
                          <div className="col-sm-7">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Initial Lease Order
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Expiry of Lease with order copy
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Application of Lease re-newal
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Status of Lease Approval
                          </label>
                          <div className="col-sm-7">
                            <select
                              className="form-control form-control-sm"
                              id="autoSizingSelect"
                            >
                              <option selected>No</option>
                              <option value={1}>Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Lease Approval Letter
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Date
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                          <div className="col-sm-5">
                            <span className="text-white">
                              <i className="fa-solid fa-file-circle-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-7 col-form-label col-form-label-sm"
                          >
                            Amount Deposited
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm "
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label
                            htmlFor="colFormLabelSm"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Challan No.
                          </label>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
      </React.Fragment>
    );
  }
}

export default Wizard;

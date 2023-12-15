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
    };
  }
  render() {
    return (
      <React.Fragment>
        <div classname="content-wrapper">
          <div classname="container-fluid">
            <div className="row">
              <div class="col-md-7 mx-auto">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Quick Example</h3>
                  </div>
                  <form>
                    <div className="card-body">
                    <div class="col-md-12">
                <div class="row">
	                <div class="col-xs-6">
                      <div class="form-group">
                          <label class="control-label" for="first_name">Name</label>
  	                        <input id="first_name" type="text" class="contactInput form-control" name="first_name" placeholder="First"/>
                      </div>
                  </div>
	                <div class="col-xs-6">
                      <div class="form-group">
                          <label class="control-label" for="last_name">&nbsp;</label>
                         <input id="last_name" type="text" class="contactInput form-control" name="last_name" placeholder="Last"/>
                      </div>
                    </div>
                </div>
                <div class="row">
	                <div class="col-xs-6">
                      <div class="form-group">
                          <label class="control-label" for="email">Email</label>
  	                        <input id="email" type="text" class="contactInput form-control" name="email" placeholder="Email"/>
                      </div>
                  </div>
	                <div class="col-xs-6">
                      <div class="form-group">
                          <label class="control-label" for="email_confrim">&nbsp;</label>
                         <input id="email_confrim" type="text" class="contactInput form-control" name="email_confrim" placeholder="Confirm Email"/>
                      </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group">
                            <label for="phone_number">Phone</label>
                            <input id="phone_number" type="phoneUS" class="contactInput form-control" name="phone_number"  placeholder="##########"  maxlength="10"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="address_1">Address 1</label>
                            <input id="address_1" type="text" class="contactInput form-control" name="address_1"/>
                        </div>
                    </div>
                </div>
        </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Wizard;

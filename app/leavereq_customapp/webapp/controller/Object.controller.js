sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "../model/formatter",
    "sap/m/MessageToast"
], function (BaseController, JSONModel, History, formatter, MessageToast) {
    "use strict";

    return BaseController.extend("demo.leavereqcustomapp.controller.Object", {

        formatter: formatter,

        /* =========================================================== */
        /* lifecycle methods                                           */
        /* =========================================================== */

        /**
         * Called when the worklist controller is instantiated.
         * @public
         */
        onInit : function () {
            // Model used to manipulate control states. The chosen values make sure,
            // detail page shows busy indication immediately so there is no break in
            // between the busy indication for loading the view's meta data
          
            this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
            //this.setModel(oViewModel, "objectView");
        },
        onNewEmployee: function(oEvent)
        {
            if(oEvent.getParameter("state"))
            {
                this.getView().byId("empId").setEnabled(true);
                this.getView().byId("empId").setValue();
                this.getView().byId("employeeName").setValue();
                this.getView().byId("designation").setValue();
                this.getView().byId("mailId").setValue();
                this.getView().byId("mobileNumber").setValue();
                this.getView().byId("department").setSelectedKey(null);
            }
            else
            this.getView().byId("empId").setEnabled(false);
        },
        onSaveEmployees: function(oEvent)
        {
            var oModel = this.getView().getModel();
            var empChanges = {};           
                       
            var empId = this.getView().byId("empId").getValue();
            var employeeName = this.getView().byId("employeeName").getValue();
            var designation = this.getView().byId("designation").getValue();
            var mailId = this.getView().byId("mailId").getValue();
            var mobileNumber = this.getView().byId("mobileNumber").getValue();
            var department = this.getView().byId("department").getSelectedKey();
           
            empChanges.employeeId = empId;
            empChanges.employeeName = employeeName;
            empChanges.designation = designation;
            empChanges.mailId = mailId;
            empChanges.mobileNumber = mobileNumber;
            empChanges.department = department;

            var isNew = this.getView().byId("isNew").getState();

            if(isNew)
            {
                oModel.create("/EmployeePersonalInfo", empChanges, {                
                    success: function (data,response) {                                         
                        MessageToast.show("New Employee Created");                  
                    },
                    error: function (oError) {                  
                    }
                }); 
            }
            else
            {
            oModel.update("/EmployeePersonalInfo('"+empChanges.employeeId+"')", empChanges, {                
                success: function (data,response) {                                         
                    MessageToast.show("Employee Information Updated");                  
                },
                error: function (oError) {                  
                }
            }); 
          }
        },
       

        /**
         * Event handler  for navigating back.
         * It there is a history entry we go one step back in the browser history
         * If not, it will replace the current entry of the browser history with the worklist route.
         * @public
         */
        onNavBack : function() {
            var sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                // eslint-disable-next-line fiori-custom/sap-no-history-manipulation
                history.go(-1);
            } else {
                this.getRouter().navTo("worklist", {}, true);
            }
        },

        /* =========================================================== */
        /* internal methods                                            */
        /* =========================================================== */

        /**
         * Binds the view to the object path.
         * @function
         * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
         * @private
         */
        _onObjectMatched : function (oEvent) {
            this.getView().byId("isNew").setState(false);
            var sObjectId =  oEvent.getParameter("arguments").objectId;
            this._bindView("/EmployeePersonalInfo" + sObjectId);
        },

        /**
         * Binds the view to the object path.
         * @function
         * @param {string} sObjectPath path to the object to be bound
         * @private
         */
        _bindView : function (sObjectPath) {
            //var oViewModel = this.getModel("objectView");

            this.getView().bindElement({
                path: sObjectPath,
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function () {
                      //  oViewModel.setProperty("/busy", true);
                    },
                    dataReceived: function () {
                      //  oViewModel.setProperty("/busy", false);
                    }
                }
            });
        },

        _onBindingChange : function () {
            var oView = this.getView(),
                oViewModel = this.getModel("objectView"),
                oElementBinding = oView.getElementBinding();

            // No data for the binding
            if (!oElementBinding.getBoundContext()) {
                this.getRouter().getTargets().display("objectNotFound");
                return;
            }

            var oResourceBundle = this.getResourceBundle();
               // oObject = oView.getBindingContext().getObject(),
               // sObjectId = oObject.employeeId,
               // sObjectName = oObject.EmployeePersonalInfo;

                // oViewModel.setProperty("/busy", false);
                // oViewModel.setProperty("/shareSendEmailSubject",
                //     oResourceBundle.getText("shareSendEmailObjectSubject", [sObjectId]));
                // oViewModel.setProperty("/shareSendEmailMessage",
                //     oResourceBundle.getText("shareSendEmailObjectMessage", [sObjectName, sObjectId, location.href]));
        }
    });

});
sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'hr.empleaverequest',
            componentId: 'EmployeePersonalInfoList',
            entitySet: 'EmployeePersonalInfo'
        },
        CustomPageDefinitions
    );
});
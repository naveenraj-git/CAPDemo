sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hr/empleaverequest/test/integration/FirstJourney',
		'hr/empleaverequest/test/integration/pages/EmployeePersonalInfoList',
		'hr/empleaverequest/test/integration/pages/EmployeePersonalInfoObjectPage',
		'hr/empleaverequest/test/integration/pages/EmployeeLeaveRequestObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeePersonalInfoList, EmployeePersonalInfoObjectPage, EmployeeLeaveRequestObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hr/empleaverequest') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeePersonalInfoList: EmployeePersonalInfoList,
					onTheEmployeePersonalInfoObjectPage: EmployeePersonalInfoObjectPage,
					onTheEmployeeLeaveRequestObjectPage: EmployeeLeaveRequestObjectPage
                }
            },
            opaJourney.run
        );
    }
);
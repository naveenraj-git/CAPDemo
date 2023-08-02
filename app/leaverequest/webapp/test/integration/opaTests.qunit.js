sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hr/leaverequest/test/integration/FirstJourney',
		'hr/leaverequest/test/integration/pages/EmployeePersonalInfoList',
		'hr/leaverequest/test/integration/pages/EmployeePersonalInfoObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeePersonalInfoList, EmployeePersonalInfoObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hr/leaverequest') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeePersonalInfoList: EmployeePersonalInfoList,
					onTheEmployeePersonalInfoObjectPage: EmployeePersonalInfoObjectPage
                }
            },
            opaJourney.run
        );
    }
);
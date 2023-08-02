using LeaveRequestService as service from '../../srv/cat-service';

annotate service.EmployeePersonalInfo with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Employee Id',
            Value : employeeId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Employee Name',
            Value : employeeName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Designation',
            Value : designation,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Mail Id',
            Value : mailId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Mobile Number',
            Value : mobileNumber,
        },
    ]
);
annotate service.EmployeePersonalInfo with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Employee Id',
                Value : employeeId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Employee Name',
                Value : employeeName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Designation',
                Value : designation,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Mail Id',
                Value : mailId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Mobile Number',
                Value : mobileNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Department',
                Value : department,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DateOfJoining',
                Value : dateOfJoining,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Leave Request',
            ID : 'LeaveRequest1',
            Target : 'linkLeaveRequest/@UI.LineItem#LeaveRequest1',
        }        
    ]
);
annotate service.EmployeeLeaveRequest with @(
    UI.LineItem : [
            {
                $Type : 'UI.DataField',
                Label : 'Leave Date',
                Value : leaveRequestDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Leave Reason',
                Value : leaveRequestReason,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Leave Comments',
                Value : leaveRequestComments,
            }
    ]
);

annotate service.EmployeeLeaveRequest with @(
    UI.LineItem #Request : [
        {
            $Type : 'UI.DataField',
            Value : leaveRequestComments,
            Label : 'leaveRequestComments',
        },{
            $Type : 'UI.DataField',
            Value : leaveRequestDate,
            Label : 'leaveRequestDate',
        },{
            $Type : 'UI.DataField',
            Value : leaveRequestId,
            Label : 'leaveRequestId',
        },{
            $Type : 'UI.DataField',
            Value : leaveRequestReason,
            Label : 'leaveRequestReason',
        },{
            $Type : 'UI.DataField',
            Value :  employee_employeeId,
            Label : 'linkToEmployee_employeeId',
        }]
);

annotate service.EmployeeLeaveRequest with @(
    UI.LineItem #LeaveRequest1 : [
        {
            $Type : 'UI.DataField',
            Value : leaveRequestComments,
            Label : 'leaveRequestComments',
        },{
            $Type : 'UI.DataField',
            Value : leaveRequestDate,
            Label : 'leaveRequestDate',
        },{
            $Type : 'UI.DataField',
            Value : leaveRequestId,
            Label : 'leaveRequestId',
        },{
            $Type : 'UI.DataField',
            Value : leaveRequestReason,
            Label : 'leaveRequestReason',
        },]
);
annotate service.EmployeePersonalInfo with @(
    UI.FieldGroup #LeaveRequestForm : {
        $Type : 'UI.FieldGroupType',
        Data : [],
    }
);

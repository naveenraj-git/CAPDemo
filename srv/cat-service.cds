using demo.leaverequest as demo from '../db/data-model';
using {sf as external} from './external/sf.csn';

service LeaveRequestService {
        
    entity EmployeePersonalInfo as projection on demo.PersonalInfo;

    entity EmployeeLeaveRequest as projection on demo.LeaveRequest;

    entity EmployeeChangeLog as projection on demo.ChangeLog;

    entity Background_Awards as projection on external.Background_Awards;

    entity Background_Compensation as projection on external.Background_Compensation;

    entity Position as projection on external.Position;
    
}
import IconButton from '@material-ui/core/IconButton';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Lock=()=>{
    var output=[];
    output.push(
    <IconButton color="primary">
    < LockOutlinedIcon/>
    </IconButton>)
    return output;
}
export default Lock;
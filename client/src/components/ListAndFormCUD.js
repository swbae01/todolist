import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import ListTableCUD from "./ListTableCUD"
import ScheduleFormCUD from "./ScheduleFormCUD"

function ListAndFormCUD({isListOrForm, selectedDate}) {

  const [listOrForm, setListOrForm] = useState(isListOrForm);
  const [mode, setMode] = useState("");
  const [rowdata, setRowdata] = useState({});

  const createNewSchedule = () => {
    setListOrForm("form");
    setMode("create");
  }

  const showSchedule = (row) => {
    setListOrForm("form");
    setMode("show");
    setRowdata(row);
  }

  const setUpdateMode = () => {
    setListOrForm("form");
    setMode("update");
  }
  
  if(listOrForm === "list") {
    return (
      <div>
        <div style={{display: "flex", alignItems: "center"}}>
          <div >
            <h1>To Do List</h1>
          </div>
            <Button 
							style={{marginLeft: "auto"}} 
							variant="contained" 
							color="primary" 
							onClick={createNewSchedule}
						>
              새로 생성
            </Button>
        </div>
        <ListTableCUD
					mode = {"date"} 
					selectedDate = {selectedDate} 
					showSchedule = {showSchedule}
				/>
      </div>
		);
  }
  else if (listOrForm === "form") {
    return (
      <div>
        <ScheduleFormCUD
          mode = {mode}
          setListOrForm = {setListOrForm} 
          selectedDate = {selectedDate} 
          setUpdateMode = {setUpdateMode}
          rowdata = {rowdata}
        />
      </div>
		);
  }
}

export default ListAndFormCUD;

import React from 'react';
//import { Link, useHistory } from "react-router-dom";
import './style.css';
import { Inject ,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth } from "@syncfusion/ej2-react-schedule";
//import logosvg from '../../assets/logo.svg';
//import api from '../../services/api';

export default function agenda(){
     return (
        <ScheduleComponent currentView='Month' selectedDate={new Date().getDay}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
        </ScheduleComponent>
    )
}

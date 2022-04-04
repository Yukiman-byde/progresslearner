import { DefaultButton, NewButton } from '@/NewComponents/NewButton'
import styled from 'styled-components'
import React, {useState} from 'react'
import {Body, Wrapper, Loader, SpanStyled} from './PracticeCss';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick




function Practice2() {

    const handleDateClick = (month) => {
       window.location.href=`/calendar/save/${month.dateStr}`;
    }

  return (

        <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        />

  )
}

export default Practice2

const Wrapper1 = styled.div`
   margin: 0 auto;
   justify-content: center;
   display:flex;
   align-items: center;
`;


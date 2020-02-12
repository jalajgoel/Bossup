import React, { Fragment } from 'react';
import { EvokeSec } from '../EvokeSec';
import { EventSec } from '../EventSec';
import { DownloadSec } from '../DownloadSec';

export const Main = props => {
    return (
        <Fragment>
            <EvokeSec/>
            <EventSec/>
            <DownloadSec/>
        </Fragment>
    )
}
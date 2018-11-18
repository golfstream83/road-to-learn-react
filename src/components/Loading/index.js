import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export const Loading = () =>
    <div>
        <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>;
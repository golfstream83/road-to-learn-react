import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from "../Button";

export const Sort = ({
    sortKey,
    activeSortKey,
    onSort,
    children
}) => {
    const sortClass = classNames(
        'button-inline',
        { 'button-active': sortKey === activeSortKey }
    );

    return (
        <Button
            onClick={() => onSort(sortKey)}
            className={sortClass}
        >
            {children}
        </Button>
    );
};

Sort.propTypes = {
    sortKey: PropTypes.string.isRequired,
    activeSortKey: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired
};
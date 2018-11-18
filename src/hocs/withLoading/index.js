import React from 'react';
import { Loading } from "../../components/Loading";

export const withLoading = (Component) => ({ isLoading, ...rest }) =>
    isLoading
        ? <Loading />
        : <Component { ...rest } />;
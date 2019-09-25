import React from 'react';

const VerificationContext = React.createContext({});

export const VerificationProvider = VerificationContext.Provider;
export const VerificationConsumer = VerificationContext.Consumer;

export default VerificationContext;

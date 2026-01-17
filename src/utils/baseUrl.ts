export const getBaseUrl = () => {
    const env=process.env.NODE_ENV

    const buildUrl=env==="development"?"http://localhost:3000":"https://domain.com";
    
    return buildUrl
  }
  
  
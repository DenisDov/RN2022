import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export const useNetworkStatus = () => {
  const [status, setStatus] = useState(null);
  const [type, setType] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setStatus(state?.details);
      setType(state?.type);
      setIsConnected(state?.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return {
    status,
    isConnected,
    type,
  };
};

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { useAuth } from '../../context/AuthContext'

const RouteGuard = ({ children }) => {
    const { data: session, status } = useSession(); // Ottieni lo stato dell'autenticazione
    const router = useRouter();

    // Verifica lo stato di autenticazione e gestisci il reindirizzamento
    if (status === 'loading') {
        return <div>Loading...</div>;
    } else if (!session) {
        router.push('/login'); // Reindirizza alla pagina di login se non autenticato
        return null;
    }

    // Restituisci i componenti figli se autenticato
    return children;
};

export default RouteGuard;
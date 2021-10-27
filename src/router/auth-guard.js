const isAuthenticatedGuard = async(to, from, next) => {
    return new Promise(() => {
        const random = Math.random() * 100;

        if (random > 50) {
            console.log("Autenticado - isAuthenticatedGuard");
            next();
        } else {
            console.log(random, "Bloqueado por el - isAuthenticatedGuard ");
            next({ name: "pokemon-home" });
        }
    });
};

export default isAuthenticatedGuard;
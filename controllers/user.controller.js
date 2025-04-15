


const register = async (req, res) => {
    try {
        const { name, password } = req.body;
    return res.json({ message: "probando el  register" });
    } catch (error) {
        console.log({ error });
        return res.status(500).json({ message: error,    });
    }
};


const login = async (req, res) => {
    try {
        return res.json({ message: "probando el login" });
    } catch (error) {
        console.log({ message: error.message });
        return res.status(500).json({ message: error.message,  });
    }
};


export const userController = { register, login };

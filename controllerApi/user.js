const User = require("../models/user");

exports.getAllUser = async(req, res) => {
    await User.find({}).then((users) => {
        if (users) {
            res.json({
                data: { users: users },
                status_code: 200,
                messages: "Success!",
            });
        } else res.json({
            data: [],
            status_code: 300,
            messages: "Users is Empty",
        });
    }).catch((err) => {
        res.json({ data: {}, status_code: 300, messages: "Error" })
    })
}

exports.checkLogin = async(req, res) => {
    const { user_name, password } = req.body;
    await User.findOne({ user_name: user_name })
        .then((user) => {
            if (!user)
                res.json({
                    data: {},
                    status_code: 300,
                    messages: "That email is not resgistered",
                });
            else {
                if (user.password != password)
                    res.json({
                        data: {},
                        status_code: 300,
                        messages: "Password is incorrect",
                    });
                else
                    res.json({
                        data: { user: user },
                        status_code: 200,
                        messages: "Success!",
                    });
            }
        })
        .catch((err) => {
            res.json({ data: {}, status_code: 300, messages: "Error" });
        });
};

exports.checkRegister = async(req, res) => {
    const { user_name, password, full_name, role_id } = req.body;
    await User.findOne({ user_name: user_name })
        .then((user) => {
            if (user)
                res.json({
                    data: {},
                    status_code: 300,
                    messages: "That email is resgistered",
                });
            else {
                const newUser = new User(req.body);
                newUser
                    .save()
                    .then((user) => {
                        res.json({
                            data: { user: user },
                            status_code: 200,
                            messages: "Success!",
                        });
                    })
                    .catch((err) => {
                        res.json({ data: {}, status_code: 300, messages: "Error" });
                    });
            }
        })
        .catch((err) => {
            res.json({ data: {}, status_code: 300, messages: "Error" });
        });
};
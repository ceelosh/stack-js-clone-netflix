module.exports = app => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at localhost:${process.env.PORT}`);
    });
}
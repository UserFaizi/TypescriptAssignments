function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love JavaScript'; }
    console.log("Making a ".concat(size, " shirt with the message: ").concat(message, "."));
}
make_shirt(); // Making a large shirt with the message: I love JavaScript.
make_shirt('medium'); // Making a medium shirt with the message: I love JavaScript.
make_shirt('small', 'Hello World!'); // Making a small shirt with the message: Hello World!.

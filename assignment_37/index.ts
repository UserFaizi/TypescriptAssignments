function make_shirt(size: string = 'large', message: string = 'I love JavaScript') {
    console.log(`Making a ${size} shirt with the message: ${message}.`);
}

make_shirt(); // Making a large shirt with the message: I love JavaScript.
make_shirt('medium'); // Making a medium shirt with the message: I love JavaScript.
make_shirt('small', 'Hello World!'); // Making a small shirt with the message: Hello World!.

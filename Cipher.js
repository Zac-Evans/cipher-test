// Caesar Cipher........................................


function cipher (message) {
    var code = [];
    var lowerCaseMessage = message.toLowerCase ();
    var messageArray = lowerCaseMessage.split('');
    var alpha = ['a','b','c','d','e','f',
    'g','h','i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','w','x','y','z',' '];
        for(var i=0; i<message.length;i++) {
            //a
            if (messageArray[i] == alpha[0]) {
                code.push('n');
            //b
            } else if (messageArray[i] == alpha[1]) {
                code.push('c');
            //c
            } else if (messageArray[i] == alpha[2]) {
                code.push('p');
            //d
            } else if (messageArray[i] == alpha[3]) {
                code.push('q');
            //e
            } else if (messageArray[i] == alpha[4]) {
                code.push('r');
            //f
            } else if (messageArray[i] == alpha[5]) {
                code.push('w');
            //g
            } else if (messageArray[i] == alpha[6]) {
                code.push('t');
            //h
            } else if (messageArray[i] == alpha[7]) {
                code.push('u');
            //i
            } else if (messageArray[i] == alpha[8]) {
                code.push('v');
            //j
            } else if (messageArray[i] == alpha[9]) {
                code.push('l');
            //k
            } else if (messageArray[i] == alpha[10]) {
                code.push('x');
            //l
            } else if (messageArray[i] == alpha[11]) {
                code.push('y');
            //m
            } else if (messageArray[i] == alpha[12]) {
                code.push('z');
            //n
            } else if (messageArray[i] == alpha[13]) {
                code.push('a');
            //o
            } else if (messageArray[i] == alpha[14]) {
                code.push('b');
            //p
            } else if (messageArray[i] == alpha[15]) {
                code.push('k');
            //q
            } else if (messageArray[i] == alpha[16]) {
                code.push('d');
            //r
            } else if (messageArray[i] == alpha[17]) {
                code.push('e');
            //s
            } else if (messageArray[i] == alpha[18]) {
                code.push('f');
            //t
            } else if (messageArray[i] == alpha[19]) {
                code.push('g');
            //u
            } else if (messageArray[i] == alpha[20]) {
                code.push('h');
            //v
            } else if (messageArray[i] == alpha[21]) {
                code.push('i');
            //w
            } else if (messageArray[i] == alpha[22]) {
                code.push('j');
            //x
            } else if (messageArray[i] == alpha[23]) {
                code.push('m');
            //y
            } else if (messageArray[i] == alpha[24]) {
                code.push('o');
            //z
            } else if (messageArray[i] == alpha[25]) {
                code.push('s');
            //
            } else if (messageArray[i] == alpha[26]) {
                code.push(' '); }
            }
    console.log(code.join(''));
}
cipher('Genius without education is like silver in the mine')

//Ceasar decipher.............................................


function decipher(message) {
    var code = [];
    var lowerCaseMessage = message.toLowerCase ();
    var messageArray = lowerCaseMessage.split('');
    var alpha = ['a','b','c','d','e','f',
    'g','h','i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','w','x','y','z',' '];
        for(var i=0; i<message.length;i++) {
            //a
            if (messageArray[i] == alpha[0]) {
                code.push('n');
            //b
            } else if (messageArray[i] == alpha[1]) {
                code.push('o');
            //c
            } else if (messageArray[i] == alpha[2]) {
                code.push('b');
            //d
            } else if (messageArray[i] == alpha[3]) {
                code.push('q');
            //e
            } else if (messageArray[i] == alpha[4]) {
                code.push('r');
            //f
            } else if (messageArray[i] == alpha[5]) {
                code.push('s');
            //g
            } else if (messageArray[i] == alpha[6]) {
                code.push('t');
            //h
            } else if (messageArray[i] == alpha[7]) {
                code.push('u');
            //i
            } else if (messageArray[i] == alpha[8]) {
                code.push('v');
            //j
            } else if (messageArray[i] == alpha[9]) {
                code.push('w');
            //k
            } else if (messageArray[i] == alpha[10]) {
                code.push('p');
            //l
            } else if (messageArray[i] == alpha[11]) {
                code.push('j');
            //m
            } else if (messageArray[i] == alpha[12]) {
                code.push('x');
            //n
            } else if (messageArray[i] == alpha[13]) {
                code.push('a');
            //o
            } else if (messageArray[i] == alpha[14]) {
                code.push('y');
            //p
            } else if (messageArray[i] == alpha[15]) {
                code.push('c');
            //q
            } else if (messageArray[i] == alpha[16]) {
                code.push('d');
            //r
            } else if (messageArray[i] == alpha[17]) {
                code.push('e');
            //s
            } else if (messageArray[i] == alpha[18]) {
                code.push('z');
            //t
            } else if (messageArray[i] == alpha[19]) {
                code.push('g');
            //u
            } else if (messageArray[i] == alpha[20]) {
                code.push('h');
            //v
            } else if (messageArray[i] == alpha[21]) {
                code.push('i');
            //w
            } else if (messageArray[i] == alpha[22]) {
                code.push('f');
            //x
            } else if (messageArray[i] == alpha[23]) {
                code.push('k');
            //y
            } else if (messageArray[i] == alpha[24]) {
                code.push('l');
            //z
            } else if (messageArray[i] == alpha[25]) {
                code.push('m');
            //    
            } else if (messageArray[i] == alpha[26]) {
                code.push(' '); }
            }
    console.log(code.join(''));
}

decipher('travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar');
new Typed('#intro-head', {
    strings: ["Anurag Chorghe"],
    typeSpeed: 20,
    backSpeed: 20,
    showCursor: false,
    onComplete: function() {
        new Typed('#title', {
            strings: ["Software Developer and Engineer"],
            typeSpeed: 20,
            showCursor: false,
            onComplete: function() {
                new Typed('#desc', {
                    strings: ["Namaste! I'm Anurag, mostly known as Starlight on Telegram. An undergraduate student learning programming whilst tinkering my way through Linux kernel. I also work on Android Open Source Project for the device(s) I own. You can check out my projects on GitHub or read the below articles for more info."],
                    typeSpeed: 5,
                    showCursor: false,
                });
              }
        });
      }
});
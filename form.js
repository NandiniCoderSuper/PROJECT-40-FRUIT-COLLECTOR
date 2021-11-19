class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting2 = createElement('h1')
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.greeting2.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(windowWidth/2-150, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(windowWidth/2,windowHeight/2);
        this.input.style('width', '200px');
        this.input.style('height', '60px');
        this.input.style('background', 'yellow');
        this.button.position(windowWidth/2,windowHeight/2+100);
        this.button.style('width', '200px');
        this.button.style('height', '60px');
        this.button.style('background', 'lightpink');
        this.reset.position(windowWidth-150, 150);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name + "!")
            this.greeting.position(windowWidth/2-95,windowHeight/2-250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            this.greeting2.html("Please wait for other players to join ")
            this.greeting2.position(windowWidth/2 - 300,windowHeight/2-100);
            this.greeting2.style('color', 'pink');
            this.greeting2.style('font-size', '70px');
        });

         this.reset.mousePressed(() => {
            this.input.show();
            this.button.show();
             player.updateCount(0);
             game.update(0);
             var playerInfoRef = database.ref('players');
             playerInfoRef.remove();   
         });

        // this.reset(() => {
        //     player.updateCount(0);
        //     game.update(0);
        //     var playerInfoRef = database.ref('players');
        //     playerInfoRef.remove();   
        // });

        // this.mousePressed(() => {
        //     player.updateCount(0);
        //     game.update(0);
        //     var playerInfoRef = database.ref('players');
        //     playerInfoRef.remove();   
        // });

        // mousePressed(() => {
        //     player.updateCount(0);
        //     game.update(0);
        //     var playerInfoRef = database.ref('players');
        //     playerInfoRef.remove();   
        // });

    }
}
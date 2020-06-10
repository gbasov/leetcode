var Solution = function(w) {
    this.w = [];
    let sum = 0;
    for ( let i in w )
    {
        this.w[i] = [sum, sum + w[i]];
        sum += w[i];
    }
};

Solution.prototype.pickIndex = function() {
    const floatRnd = Math.random();
    const rnd = Math.floor( floatRnd * this.w[this.w.length - 1][1] );
    
    let i = Math.floor( this.w.length / 2 );
    let r = i;

    while (!( rnd < this.w[i][1] && rnd >= this.w[i][0] ))
    {
        r = Math.ceil( r / 2 );
        
        if (rnd < this.w[i][0])
        {
            i = i - r;
        } else {
            i = i + r;
        }

        if (i < 0) {
            i = 0;
        }
        else if (i >= this.w.length) {
            i = this.w.length - 1;
        }
    }

    return i;
};

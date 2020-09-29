class Lady{
    content = 'Hi,帅哥！'
    say(){
        return this.content
    }
}

class xjj extends Lady{
    say(){
        return super.say()+',nihao'
    }
    sayLove(){
        return 'love'
    }
}

const goddes = new xjj()
console.log(goddes.say())
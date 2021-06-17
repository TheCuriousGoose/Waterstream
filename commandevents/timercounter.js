var Counter = module.exports = {
    count: 0,
    add: function() {
        Counter.count += 1;
    },
    remove: function() {
        Counter.count -= 1;
    }
}
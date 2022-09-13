var expect = chai.expect;

describe('myFunction', function() {
    describe('#shuffle', function(){
        it('should randomize the array of cards', function(){
         var x = shuffle('3', '2');
         expect(x).to.equal('2', '3');   
        });
    });
});

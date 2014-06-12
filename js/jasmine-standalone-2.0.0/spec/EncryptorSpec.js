describe("Encryptor", function() {
  var encryptor;

  beforeEach(function() {
    encryptor = new Encryptor();
  });

  describe("", function(){

  });

  it("should respond a empty text", function() {
    answer = encryptor.encrypt('', 3);

    expect(answer).toEqual('');
  });

  it("should responde a code of each letter as a list", function() {
    answer = encryptor.encrypt('ABC', 3);

    expect(answer).toEqual("DEF");
  });

  // it("should receive a message abc and respond def", function() {
  //   answer = encryptor.encrypt('abc', 3);

  //   expect(answer).toEqual('def');
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});

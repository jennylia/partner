// this just checks that the MochaWeb object is present
if (typeof MochaWeb !== "undefined" && MochaWeb !== null) {
  MochaWeb.testOnly(function() {
    describe("Login", function() {
      it("user should be logged in", function() {
        var currentUserId = Meteor.userId()
        chai.assert(currentUserId !== null, 'Log in to see this test pass.');
      })
    })
  });
}

// This is a somewhat arbitrary example.

// May require restarting meteor after logging in.
// If you're logged in and the test is passing, logging out
// should cause the test to fail.
// Note: you'll have to be logged in on the test mirror **
// example url: http://localhost:62923

// Chai Assert API == http://chaijs.com/api/assert

let stompCliet = null;

function setConnected(connected) {
  $("#connect").prop("disabled", connected);
  $("#disconnect").prop("disabled", !connected);

  if (connected) {
    $("#conversation").show();
  }
  else {
    $("#conversation").hide();
  }

  $("#greetings").html("");
}

function connect() {
  let socket = new SockJS("/gs-guide-websocket");
  stompCliet = Stomp.over(socket);
  stompCliet.connect({}, function (frame) {
    setConnected(true);
    console.log("Connected: " + frame);
    stompCliet.subscribe('/topic/greetings', greeting => {
      showGreeting(JSON.parse(greeting.body).content);
    })
  });
}

function disconnect() {
  if (stompCliet !== null) {
    stompCliet.disconnect();
  }
  setConnected(false);
  console.log("Disconnected");
}

function sendName() {
  stompCliet.send('/app/hello', {}, JSON.stringify({ "name": $("#name").val() }));
}

function showGreeting(message) {
  $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(() => {
  $("form").on("submit", e => {
    e.preventDefault();
  });

  $("#connect").click(() => {
    connect();
  })

  $("#disconnect").click(() => {
    disconnect();
  })

  $("#send").click(() => {
    sendName();
  })
})
package io.github.hyunwoo.springwebsocket.websocket;

import org.springframework.context.ApplicationListener;
import org.springframework.messaging.MessageHeaders;
import org.springframework.web.socket.messaging.SessionConnectEvent;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class WebSocketConnectHandler<S> implements ApplicationListener<SessionConnectEvent> {

    public WebSocketConnectHandler() {
        super();
    }

    @Override
    public void onApplicationEvent(SessionConnectEvent event) {
        MessageHeaders headers = event.getMessage().getHeaders();
        log.info("connect");
        // final StompHeaderAccessor accessor =
        // StompHeaderAccessor.wrap(event.getMessage());
        // final String sessionId = accessor.getSessionId();
        // log.info("STEP1. connecte. idsession_id={}", sessionId);
    }
}
package io.github.hyunwoo.springwebsocket.websocket;

import org.springframework.context.ApplicationListener;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class WebSocketDisconnectHandler implements ApplicationListener<SessionDisconnectEvent> {

    @Override
    public void onApplicationEvent(SessionDisconnectEvent event) {
        String sessionId = event.getSessionId();
        log.info("[{}] disconnect", sessionId);
    }
}
package io.github.hyunwoo.springwebsocket.config;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Order(Ordered.HIGHEST_PRECEDENCE + 99)
public class FilterChannelInterceptor implements ChannelInterceptor {

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
        String sessionId = headerAccessor.getSessionId();
        final StompCommand command = headerAccessor.getCommand();
        final SimpMessageType messageType = headerAccessor.getMessageType();

        if (messageType == SimpMessageType.HEARTBEAT) {

            return message;
        }

        log.info("[{}] COMMAND={}", sessionId, headerAccessor.getCommand());
        log.info("[{}] FULL MESSAGE={}", sessionId, message);

        switch (command) {
            case CONNECT:
                // TODO: 접속한 사용자 정보를 메모리 OR REDIS JDBC MONGODG 등에 저장하면 됨
                log.info("CONNECT");
                break;
            case DISCONNECT:
                // TODO: 접속해제 사용자 정보 삭제하기
                log.info("DISCONNET");
                break;
            default:
                log.info("뭔가를 해야 할까?");
        }

        return message;
    }

}
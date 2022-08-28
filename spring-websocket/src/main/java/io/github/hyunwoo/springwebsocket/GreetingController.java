package io.github.hyunwoo.springwebsocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import io.github.hyunwoo.springwebsocket.message.Greeting;
import io.github.hyunwoo.springwebsocket.message.HelloMessage;
import lombok.extern.slf4j.Slf4j;

/**
 * Message-handler Controller
 */
@Slf4j
@Controller
public class GreetingController {

    /**
     * <pre>
     * Message - handing
     * 1초 지연 후 Geeting 객체를 만들고 반환
     * The return value is broadcast to all subscribers of '/topic/greetings'.
     * </pre>
     *
     * @param message 수신 메세지
     * @return Greeting 응답 메세지
     * @throws Exception
     */
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        log.info("[{}]의 메세지 수신", message.getName());
        Thread.sleep(1000);
        String content = "Hello " + HtmlUtils.htmlEscape(message.getName() + "!!");
        return new Greeting(content);
    }
}
package io.github.hyunwoo.springwebsocket.message;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * <pre>
 * 이름을 전달하는 메세지
 * 입력 예시
 * {
 *  "name": "Hyunwoo"
 * }
 * </pre>
 */
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class HelloMessage implements Serializable {
    private static final long serialVersionUID = 4740103207387136l;
    private String name;
}
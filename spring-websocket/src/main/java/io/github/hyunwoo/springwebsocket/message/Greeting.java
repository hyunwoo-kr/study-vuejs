package io.github.hyunwoo.springwebsocket.message;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Greeting implements Serializable {
    private static final long serialVersionUID = 513504899497984l;
    private String content;
}
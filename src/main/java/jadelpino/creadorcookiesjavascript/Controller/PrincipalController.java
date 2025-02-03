package jadelpino.creadorcookiesjavascript.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PrincipalController {
    @GetMapping("app")
    public String devuelveApp (){
        return "app";
    }
}
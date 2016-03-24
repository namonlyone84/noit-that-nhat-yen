package nam.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.websocket.server.PathParam;
import java.io.IOException;

@Controller
public class HomeController {

    @Autowired
    ApplicationContext appContext;

    @RequestMapping(value = "/{page}")
    public String page(Model model, @PathVariable(value = "page") String page) throws IOException {
        if (StringUtils.isBlank(page)) {
            return "index";
        }
        processPage(model, page);
        return page + "-page";
    }

    @RequestMapping(value = {"/"})
    public String homePage(Model model) throws IOException {
        processPage(model, "home");
        return "index";
    }


    private void processPage(Model model, String page) throws IOException {
        Resource[] resources = appContext.getResources("classpath*:/static/img/" + page + "/*");
        model.addAttribute("numberPictures", resources.length);
    }
}

<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Angular test - Login</title>
    <r:require module="bootstrap"/>
    <r:layoutResources/>
  </head>

  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="login-panel panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Please Sign In</h3>
            </div>

            <div class="panel-body">
              <form action='${postUrl}'
                    role="form"
                    method='POST'
                    autocomplete='off'>
                <fieldset>
                  <div class="form-group">
                    <input class="form-control"
                           placeholder="Username"
                           name='j_username'
                           type="text"
                           autofocus>
                  </div>

                  <div class="form-group">
                    <input class="form-control"
                           placeholder="Password"
                           name='j_password'
                           type="password"
                           value="">
                  </div>

                  <div class="checkbox">
                    <label>
                      <input name='${rememberMeParameter}'
                             <g:if test='${hasCookie}'>checked='checked'</g:if>
                             type="checkbox"
                             value="Remember Me">Remember Me
                    </label>
                  </div>
                  <input class="btn btn-primary"
                         type="submit"
                         value='${message(code: "springSecurity.login.button")}'>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <r:layoutResources/>
  </body>

</html>

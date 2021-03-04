function makeButton()
{
    var radios = document.getElementsByName("Button");
    for (var index = 0; index < radios.length; index++)
    {
        if (radios[index].checked)
        {
            document.getElementById("Button_" + radios[index].value).style.fontWeight='bold';
        }
        else
        {
            document.getElementById("Button_" + radios[index].value).style.fontWeight='normal';
        }
    }
}

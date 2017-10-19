<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the data.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.hrytsaienko.in.ua/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "tatiana89@i.ua";

    // Set the email subject.
    $subject = "Нове повідомлення від $name";

    // Build the email content.
    $email_content = "Ім'я: $name\n";
    $email_content = "Тема: $topic\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Повідомлення:\n$message\n";

    // Build the email headers.
    $email_headers = "Від: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.hrytsaienko.in.ua/index.php?success=1#form");

?>
######################################
#  Setup

$a = random(5,15,1);
$b = random(3,5,1);

######################################
#  Main text

BEGIN_TEXT
A tree is supported by a wire anchored in the ground $a feet from
its base.  The wire is $b feet longer than the height that it reaches
on the tree. How long is the wire?
$PAR
a) Use the Pythagorean theorem to write a polynomial equation to
solve to answer the question.  Use the variable \(x\) to represent $BBOLD
the length of the wire $EBOLD.
$BR
Answer:  \{ ans_rule(30) \}
$PAR
b)  Solve the equation and give the length of the wire.
$BR
Answer:  \{ ans_rule(10) \} 
END_TEXT

######################################
#  Answer

Context()->variables->are(s=>'Real');

$ans_a = "$a^2 + (x-$b)^2 = x^2";
ANS(Picky_equation_cmp($ans_a));

$ans_b = ($a**2+$b**2)/(2*$b);
ANS(num_and_unit_checker($ans_b, "feet")); 
